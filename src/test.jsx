evt.preventDefault();
const searchValue = evt.target[0].value.trim();
if (!searchValue) {
  Notiflix.Notify.info(
    'The search bar cannot be empty. Please type any criteria in the search bar.'
  );
} else {
  setSearchParams({ search: searchValue, page: 1 });
}
