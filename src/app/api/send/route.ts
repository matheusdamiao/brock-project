import { WelcomeTemplate } from "@/components/welcomeTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { File } from "buffer";
import { NewLeadTemplate } from "@/components/newLeadTemplate";
import WelcomeEmail from "@/emails/welcome";
import NewLead from "@/emails/newLead";
const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest) {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const phone = data.get('phone');
  const message = data.get('message');
  const f = data.get('file');
  const fileName = data.get('fileName');

// let buffer: Buffer;

// if(f instanceof File){
//     buffer = Buffer.from(await f.arrayBuffer())
//     console.log('um buffer aqui', buffer);
// }
 
// const file = f as unknown as File;
//   console.log('o file aqui', f);
//   console.log(data);

  // let attachment: {filename: string, content: Buffer};
  let attachment: {filename: string, path: string};
   if(f){
 attachment = f
 ? { filename: String(fileName), path: String(f)  }
  : undefined;
 }

//  if(file){
//   attachment = file
//   ? { filename: file.name, content: buffer }
//   : undefined;
//  }
 

  try {
  const resendData = await resend.emails.send({
      from: 'Brock Investments  <contato@matheusdamiao.com.br>',
      to: [`${email}`],
      subject: 'Recebemos sua proposta',
      // react: WelcomeTemplate({ nome: `${name}` }) as React.ReactElement,
      react: WelcomeEmail({name: `${name}`}) as React.ReactElement,
    });
    console.log('data do resend', resendData);


   

    const newLeadResponse = await resend.emails.send({
        from: 'Novo Lead do site <contato@matheusdamiao.com.br>',
        to: ['matheus.damiaoliveira@gmail.com'],
        bcc: ['matheus.damiaoliveira@gmail.com'],
        subject: 'Novo lead no site',
        // attachments: [ 
        //     {
        //         filename: file.name,
        //         content: buffer
        //     }
        //   ],
        attachments: attachment ? [attachment] : undefined,
        // react: NewLeadTemplate({
        //   nome: `${name}`,
        //   email: `${email}`,
        //   telefone: `${phone}`,
        //   mensagem: `${message}`,
        // }) as React.ReactElement,
        react: NewLead({nome: `${name}`,
         email: `${email}`,
         telefone: `${phone}`,
         mensagem: `${message}`,}) as React.ReactElement
      });

      console.log('new lead data',newLeadResponse);

    return new Response(
      'Mensagem enviada!'
    );
  } catch (error) {
    console.log('olha o erro', error);
    return Response.json({ error });
    
  }
}
