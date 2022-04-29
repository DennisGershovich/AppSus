
export class BookFilter extends React.Component{
    state ={
        filterBy:{
            name:'',
            price:''
        }
    }
    
   inputRef = React.createRef() 

   componentDidMount(){
       this.inputRef.current.focus()
   }

   onHandleChange = ({target}) =>{
       const value = (target.type === 'number')? +target.value : target.value
       const field = target.name
        this.setState((prevState) =>( {filterBy:{ ...prevState.filterBy,[field]:value}}),() =>{
            this.props.onSetFilter(this.state.filterBy)
        } )
   }

   onFilter = (ev) =>{
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
   }

    render(){
        const{name,price} = this.state.filterBy
        return <div className="books-filter">
        <form onSubmit={this.onFilter}>
            <label htmlFor="by-name">Name</label>
            <input type="text" id="by-name" value={name} name='name' onChange={this.onHandleChange} ref={this.inputRef}></input>

            <label htmlFor="by-price">Price</label>
            <input type="number" id="by-price" value={price} name='price' onChange={this.onHandleChange}></input>
        </form>
    </div>
    }
}