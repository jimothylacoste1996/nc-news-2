export default function NavButton(props) {
  return (
    <div>
      <button type="button" className={props.instructions}>
        {props.children}
      </button>
    </div>
  );
}
