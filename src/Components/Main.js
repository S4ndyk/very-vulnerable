import React, { useState, useEffect } from 'react';
import service from '../service';

const Main = () => {
  const [newLink, setNewLink] = useState('')
  const [links, setLinks] = useState([])
  const addLink = (event) => {
    event.preventDefault()
    service.createLink(newLink)
    setLinks(links.concat(newLink))
    setNewLink('')
  }

  useEffect(() => {
    service.getLinks()
    .then(data => setLinks(data.map(link => link.link)))
  }, [])

  return (
    <div>
      <form onSubmit={addLink}>
        <input type='text' value={newLink} onChange={(event) => setNewLink(event.target.value)} />
        <button type='submit'>comment</button>
        <li>
          {links.map(link => {
            return (
              <ul>
                <a href={link}>{link}</a>
              </ul>
            )
          })}
        </li>
      </form>
    </div>
  );
}

export default Main;