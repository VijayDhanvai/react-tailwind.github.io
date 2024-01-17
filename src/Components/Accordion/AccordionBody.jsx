function AccordionBody(props) {
  const { AccDetail } = props;

  return (
    <div className="border shadow-xl border-t-0 p-3 bg-slate-100 text-slate-700">
      {AccDetail}
    </div>
  );
}

export default AccordionBody;
