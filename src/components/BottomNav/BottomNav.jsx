import NavElement from "../NavElement";

function BottomNav() {
  return (
    <div className="flex bg-primary-gray rounded-tl-2xl rounded-tr-2xl w-[75%] h-12 justify-center items-center gap-10 z-10 fixed bottom-0 left-[25%] -ml-11">
      <NavElement iconNumber={1} active={true} />
      <NavElement iconNumber={2} />
      <NavElement iconNumber={3} />
      <NavElement iconNumber={4} />
    </div>
  );
}

export default BottomNav;
