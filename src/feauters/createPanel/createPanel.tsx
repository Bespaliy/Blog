

import './createPanel.css';

const CreatePanel = () => {
  return (
    <aside className="panel">
      <div className="panel_title">
        <label htmlFor="title">BLOG TITLE</label>
        <input id="title" type="text" name="title" required />
      </div>
      <div className="panel_text">
        <label htmlFor="text">TEXT OF BLOG</label>
        <textarea name="text" id="text"></textarea>
      </div>
      <div className="panel_tags">
        <label htmlFor="tag">TAGS OF BLOG</label>
        <div>
          <input name="tags" id="tags"></input>
          <button className='btn btn_3d'>ADD TAGS!</button>
        </div>
      </div>
      <div className="panel_submit">
        <button className='btn btn_3d'>CREATE BLOG!</button>
      </div>
    </aside>
  )
}

export default CreatePanel;