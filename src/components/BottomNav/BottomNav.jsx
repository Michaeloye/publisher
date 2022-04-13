import NavElement from "../NavElement";

function BottomNav() {
  return (
    <div
      className="flex bg-primary-gray rounded-tl-2xl rounded-tr-2xl w-[75%] h-12 justify-center items-center gap-10 z-10 fixed bottom-0 left-[25%] -ml-11"
      style={{
        "--tw-shadow":
          "0 -3px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "--tw-shadow-colored":
          "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
        boxShadow:
          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      }}
    >
      <NavElement iconNumber={1} active={true} />
      <NavElement iconNumber={2} />
      <NavElement iconNumber={3} />
      <NavElement iconNumber={4} />
    </div>
  );
}

export default BottomNav;
