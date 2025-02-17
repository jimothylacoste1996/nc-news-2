const handleLoginClick = () => {
  console.log("HELLO");
};

export default function LoginButton(props) {
  return (
    <div>
      <button
        type="button"
        className={props.instructions}
        onClick={handleLoginClick}
      >
        {props.children}
      </button>
    </div>
  );
}
