import Button from "@mui/material/Button";

export default function NavButton(props) {
  return (
    <div>
      <Button
        sx={{
          fontSize: "1rem",
          padding: "6px 12px",
          minWidth: "100px",
          backgroundColor: "white",
          color: "red",
        }}
        variant="contained"
        id="my-custom-btn"
        className={props.instructions}
      >
        {props.children}
      </Button>
    </div>
  );
}
