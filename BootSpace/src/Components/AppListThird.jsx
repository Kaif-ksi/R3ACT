function AppListThird() {
  let todoName = "Alha Century";
  let todoDate = "1/1/2001";

  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-sm-6">{todoName}</div>
        <div class="col-sm-4">{todoDate}</div>
        <div class="col-sm-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppListThird;
