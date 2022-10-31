const RewardModal = ({ setModalOpen }) => {
  return (
    <>
      <div className="ReawardModal">
        <div className="ReawardModalBody">
          <div className="ReawardModalContent">
            <h3 className="text-3xl font-semibold">Modal Title</h3>
            <button
              className="ReawardModalButton"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
            <button
              className="ReawardModalButton"
              type="button"
              onClick={() => setModalOpen(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardModal;
