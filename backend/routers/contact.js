const router = require("express").Router();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

async function main(name, organization, email, content) {
  // 管理者にメールを送信
  const info = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_USER,
    subject: `${name}様からのお問い合わせ`,
    text: `
      【お名前】
      ${name}
      【ご所属】
      ${organization}
      【メールアドレス】
      ${email}
      【お問い合わせ内容】
      ${content}
    `,
    html: `
      <p>【お名前】</p>
      <p>${name}</p>
      <p>【ご所属】</p>
      <p>${organization}</p>
      <p>【メールアドレス】</p>
      <p>${email}</p>
      <p>【内容】</p>
      <p>${content}</p>
    `,
  });

  console.log("Message sent: %s", info.messageId);

  // ご利用者様にメールを送信
  const info2 = await transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: email,
    subject: "お問い合わせ自動返信メール",
    text: `
      ${organization}
      ${name}様
      お問い合わせいただきありがとうございます。
      回答までいましばらくお待ちください。
      木下 倭
      Email: ${process.env.NODEMAILER_USER}

      【お問い合わせ内容】
      ${content}
    `,
    html: `
      <p>${organization}</p>
      <p>${name}様</p>
      <p>お問い合わせいただきありがとうございます。</p>
      <p>回答までいましばらくお待ちください。</p>
      <p>木下 倭</p>
      <p>Email: ${process.env.NODEMAILER_USER}</p>
      <br />
      <p>【お問い合わせ内容】</p>
      <p>${content}</p>
    `,
  });

  console.log("Message sent: %s", info2.messageId);
}

router.post("/", (req, res) => {
  const { name, organization, email, content } = req.body;
  main(name, organization, email, content).catch(console.error);
  return res(console.error);
});

module.exports = router;
