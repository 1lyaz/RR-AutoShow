import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          model: 'Rolls-Royce',
          title: 'Ghost',
          img: 'ghost.jpeg',
          age: 'Седан, II Рестайлинг',
          desc: '2022',
          category: 'sedan',
          price: '398850'
        },
        {
          id: 2,
          model: 'Rolls-Royce',
          title: 'Phantom',
          age: 'Седан, VIII Поколение',
          img: 'phantom.jpeg',
          desc: '2021',
          category: 'sedan',
          price: '1067400'
        },
        {
          id: 3,
          model: 'Rolls-Royce',
          title: 'Cullinan Black Badge',
          age: 'Внедорожник, I поколение',
          img: 'blackb.jpeg',
          desc: '2022',
          category: 'suv',
          price: '791900'
        },
        {
          id: 4,
          model: 'Rolls-Royce',
          title: 'Cullinan ',
          age: 'Внедорожник, I поколение',
          img: 'cullinan.jpeg',
          desc: '2022',
          category: 'suv',
          price: '789900'
        },
        {
          id: 5,
          model: 'Rolls-Royce',
          title: 'Wraith',
          age: 'Купе, I Рестайлинг',
          img: 'wraith.jpeg',
          desc: '2016',
          category: 'coupe',
          price: '378000'
        },
        {
          id: 6,
          model: 'Rolls-Royce',
          title: 'Wraith',
          age: 'Купе, I Рестайлинг',
          img: 'wrblack.jpeg',
          desc: '2014',
          category: 'coupe',
          price: '340000'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
