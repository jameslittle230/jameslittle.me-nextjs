const Note = ({ title, children }: { title: string; children: any }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Note;
