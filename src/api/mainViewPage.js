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

export const changeItem = async (item) => {
  try {
    await fetch(`${url}/products/${item.id}`, {
      method: 'put',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        "id": item.id,
        "title": item.title,
        "description": item.description,
        "price": item.price,
        "inCart": !item.inCart,
        "count": 1,
        "totalItemPrice": item.price
      })
    })
  } catch (error) {
    console.log(error)
  }
}

export const addItem = async (newView) => {
  try {
    await fetch(`${url}/products/`, {
      method: 'post',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newView)
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCardViewData = async (activePages, setTotalPages, setData) => {
  try {
    const response = await fetch(`${url}/products?_limit=10&_page=${activePages}&inCart=true`);
    const responseJson = await response.json();
    const totalItems = parseFloat(response.headers.get('X-Total-Count'));

    setTotalPages(Math.ceil(totalItems / 10));
    setData(responseJson);

  } catch (error) {
    console.log(error)
  }
}


export const getCard = async (id, setTitle, setPrice, setInCart, setDescription, setId) => {
  try {
    const response = await fetch(`${url}/products/${id}`, {
      method: 'get'
    })
    const responseJson = await response.json()

    setId(responseJson?.id)
    setTitle(responseJson?.title)
    setPrice(responseJson?.price)
    setInCart(responseJson?.inCart)
    setDescription(responseJson?.description)
  } catch (error) {
    console.log(error)
  }
}
