import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: 'nocountry.s4.11.mern@gmail.com',
        pass: 'eanbexrdhwhoptya',
    },
})

export const sendEmail = async (email:any, template: any) => {
    await transporter.sendMail({
        from: 'PetFinder <nocountry.s4.11.mern@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Bienvenido ✔', // Subject line
        text: 'Bienvenido', // plain text body
        html: template, // html body
    })
}



