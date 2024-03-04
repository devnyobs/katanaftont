import * as Yup from "yup";

export const Loginvalidation = Yup.object().shape({
  email: Yup.string().email("please enter valid email").required(),
  password: Yup.string().min(8).required("the password is incorrect"),
});

export const Prayervalidation = Yup.object().shape({
  name: Yup.string().required("please inter the name"),
  adress: Yup.string().required("please inter the adress"),
  email: Yup.string().email("please enter valid email").required(),
  phone: Yup.number().required("please inter the phone"),
  prayer: Yup.string().required("please provide your prayer"),
});

export const Messagevalidation = Yup.object().shape({
  titlemsg: Yup.string().required("please inter the title"),
  subtitlemsg: Yup.string().required("please inter the subtitle"),
  contentmsg: Yup.string().required("please inter the content"),
})
export const Videovalidation = Yup.object().shape({
  title: Yup.string().required("please inter the title"),
  subtitle: Yup.string().required("please inter the subtitle"),
  videourl: Yup.string().required("please inter the video URL"),
})
export const Eventvalidation = Yup.object().shape({
  title: Yup.string().required("please inter the title"),
  subtitle: Yup.string().required("please inter the subtitle"),
  content: Yup.string().required("please inter the content"),
})
export const Watchvalidation = Yup.object().shape({
  videourl: Yup.string().required("please inter the video URL"),
  title: Yup.string().required("please inter the title"),
  subtitle: Yup.string().required("please inter the subtitle"),
  content: Yup.string().required("please inter the content"),
})
