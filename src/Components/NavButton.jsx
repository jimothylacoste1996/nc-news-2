export default function NavButton(props) {
  return (
    <div>
      <button type="button" id="my-custom-btn" className={props.instructions}>
        {props.children}
      </button>
    </div>
  );
}
