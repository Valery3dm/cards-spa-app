const url = 'http://localhost:3001'

export const fetchData = async (inputValue, activePages = 1, setTotalPages, setData) => {
  try {
    const response = await fetch(`${url}/products?_limit=10&_page=${activePages}&title_like=${inputValue}`);
    const responseJson = await response.json();
    const totalItems = parseFloat(response.headers.get('X-Total-Count'));

    setTotalPages(Math.ceil(totalItems / 10));
    setData(responseJson);
  } catch (error) {
    console.log(error)
  }
}

export const deleteItem = async (id) => {
  try {
    await fetch(`${url}/products/${id}`, {
      method: 'delete'
    })
  } catch (error) {
    console.log(error)
  }
}

export const changeItem = async ({id, title, description, price}) => {
  try {
    await fetch(`${url}/products/${id}`, {
      method: 'put',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "id": id,
        "title": title,
        "description": description,
        "price": price,
        "inCart": true
      })
    })
  } catch (error) {
    console.log(error)
  }
}
