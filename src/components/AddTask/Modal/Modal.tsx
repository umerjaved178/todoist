import { Paper, Divider } from "@material-ui/core";

interface Props {
  items: string[];
}

const Modal: React.FC<Props> = ({ items }) => {
  return (
    <div
      style={{
        maxWidth: "20rem",
        marginLeft: "auto",
      }}
    >
      <Paper elevation={2}>
        {items.map((x) => (
          <>
            <div
              style={{
                padding: ".70rem",
              }}
            >
              {x}
            </div>
            <Divider />
          </>
        ))}
      </Paper>
    </div>
  );
};

export default Modal;
