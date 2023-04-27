const fetchMeals = async () => {
      const response = await fetch("https://react-http-b7ad1-default-rtdb.firebaseio.com/meals.json")
      const responseData = await response.json()
      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })


      }
      console.log(loadedMeals)
    }
    fetchMeals()