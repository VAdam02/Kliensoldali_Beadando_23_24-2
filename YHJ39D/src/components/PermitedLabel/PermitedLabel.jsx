const PermitedLabel = ({ permitted }) => {
    return (
        <div>
            {permitted ? <div>Jogosult</div> : <div>Nem Jogosult</div>}
        </div>
    );
};

export default PermitedLabel;