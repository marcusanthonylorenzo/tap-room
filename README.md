
# The Tap Room

## Summary:
### For this challenge, I will use a combination of Class Components with React 18, for balance and experience.
Solely to demonstrate an interworking between established and updated features.

- All kegs come full at 124 pints per keg.
- Alcohol Content is randomized.
- Kegs will show in Bar Service Area AND Place Order area
- It Creates, Reads, and Deletes.
- Data almost persists in localStorage, but rerenders on mount, so will overwrite the dependencies
- Lots of focus on useEffect hooks and trying to understand lifecycle.



![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/100096239/176978773-9f782b57-d35f-42f6-bdf9-056a638dc09f.gif)




### Design:


#### I'll get better at this:

![Tap Room Flowchart](https://user-images.githubusercontent.com/100096239/176937005-72f21f24-594a-4f19-8132-ef4f2c3111c9.jpg)

---

- Bar Service Area (READ)

  LOCAL_STORAGE_KEGS = useState() //pass to AddKegs Class, KegCard

  - Map kegs in local Storage =>
    - KegCard { name, brand, price, alcoholContent, pintsRemaining } //pass keg to KegCard Component
    - if keg.pintsRemain

  - AddNewKeg() //Pass as props to AddKegs Class. Update LocalStorage onSubmit


- Persist kegs in Local Storage (for now)
- AddKegs from form (CREATE)
      state = {\
        id: uuid
        name
        brand
        price
        alcoholContent
        pintsRemaining //set to 124
        decrementPintsRemaining: () => this.pintsRemaining -= 1
      }

      //check remaining

      const decrementPintRemaining = 


      return (
        <>
          <div className="Keg" key="this.state.id">
            <form onSubmit={this.props.AddNewKeg(this.state)}
              

              <Button className="pint" onClick={()}
            </form>
          </div>
        </>
      )



- KegCard ({keg}) =>

      return (
        <>
          <div className="KegCard" style={{inStock}} 

            //show details, add decrement button, if 

          </div>
        </>
      )


<!-- - KegDetails :{id}  //React Router -->


