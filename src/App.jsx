
import {Bookmark} from 'lucide-react';
const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className='top'>

          <img src='https://img.icons8.com/color/1200/amazon.jpg' alt=''/>
          <button>save <Bookmark /></button>
        </div>
        <div className='center'>
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>senior ui/ux designer</h2>
        <div>
          <h4>Part time</h4>
          <h4>Senior level</h4>
        </div>
        </div>
        <div className='bottom'>
          <div>
            <h5>120$/hr</h5>
            <p>mumbai, india</p> 
          </div>
        </div>
      </div>
    </div>
  )
}


export default App
