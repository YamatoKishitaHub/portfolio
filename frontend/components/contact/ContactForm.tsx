"use client";

import { useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Heading from "../ui/Heading";

type Inputs = {
  name: string;
  organization: string;
  email: string;
  content: string;
};

interface State extends SnackbarOrigin {
  open: boolean;
  error: boolean;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({ mode: "onChange" });

  const [submitting, setSubmitting] = useState<boolean>(false);

  // 送信後通知
  const [state, setState] = useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    error: false,
  });
  const { vertical, horizontal, open, error } = state;

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setSubmitting(true);

      await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          organization: data.organization,
          email: data.email,
          content: data.content,
        }),
      });

      reset();

      setState({ ...state, open: true });
    } catch (error) {
      console.log(error);
      setState({ ...state, open: true, error: true })
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Heading label="お問い合わせ" />
      <div className="flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4 w-1/2 min-w-80 mx-auto">
          <FormControl error={!!errors.name}>
            <InputLabel htmlFor="component-outlined">お名前 *</InputLabel>
            <OutlinedInput
              id="outlined-required"
              label="お名前 *"
              {...register("name", { required: true })}
            />
            {errors.name && <FormHelperText id="component-error-text">この項目は必須です。</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors.organization}>
            <InputLabel htmlFor="component-outlined">ご所属 *</InputLabel>
            <OutlinedInput
              id="outlined-required"
              label="ご所属 *"
              {...register("organization", { required: true })}
            />
            {errors.organization && <FormHelperText id="component-error-text">この項目は必須です。</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors.email}>
            <InputLabel htmlFor="component-outlined">メールアドレス *</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="メールアドレス *"
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email?.type === "required" && <FormHelperText id="component-error-text">この項目は必須です。</FormHelperText>}
            {errors.email?.type === "pattern" && <FormHelperText id="component-error-text">メールアドレスの形式が間違っています。</FormHelperText>}
          </FormControl>
          <FormControl error={!!errors.content}>
            <Textarea placeholder="お問い合わせ内容 *" minRows={10} error={!!errors.content} {...register("content", { required: true })} />
            {errors.content && <FormHelperText id="component-error-text">この項目は必須です。</FormHelperText>}
          </FormControl>
          <div className="mx-auto">
            <Button type="submit" variant="outlined" disabled={!isValid || submitting} endIcon={<SendIcon />} className="text-black border-slate-900 hover:border-slate-900">
              送信
            </Button>
          </div>
        </form>
      </div>
      {/* 送信後通知 */}
      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
        >
          <Alert
            onClose={() => setState({ ...state, open: false })}
            severity={!error ? "success" : "error"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {!error ? (
              <>
                お問い合わせいただきありがとうございます。<br />
                <a href="mailto:kishita.yamato.26@gmail.com">
                  kishita.yamato.26@gmail.com
                </a>
                から自動返信メールを送信いたしましたので、ご確認ください。<br />
                また、追って木下よりご連絡させていただきますので、今しばらくお待ちください。
              </>
            ) : (
              "送信に失敗しました。"
            )}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default ContactForm;
