const RegisterBtn = ({ className }) => {
  return (
    <a
      href="https://forms.gle/7rjcMbVoYoMfDBG1A"
      className={`bg-[#423AD8] px-[50px] py-[30px] rounded-[45px] text-white text-lg font-semibold border-none  ${className} font-inter no-underline text-center `}
      style={{ boxShadow: "10px 16px 35.5px 0px rgba(66,58,216,0.3)" }}
    >
      Register Now
    </a>
  );
};

export default RegisterBtn;
