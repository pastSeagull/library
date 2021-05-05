import styleMedia from './App.module.css'
import NewBook from './pages/newbook'
import Searchs from './pages/search'
import Notice from './pages/notice'
import Service from './pages/service'


const App =() => {
  return (
    <div>
      <div className={styleMedia.wpcontainer}>
        <Searchs />
        <Service />
        <Notice />
        <NewBook />
      </div>
    </div>
  );
}

export default App;
