import { Card } from 'antd'
import React from 'react'
import star from '../../images/landing1/star.png'
import starActivated from '../../images/landing1/star_activated.png'
import lock from '../../images/landing1/lock.png'
import { Link, useRouteMatch } from 'react-router-dom'

const CourseListItem = ({
  image,
  title,
  description,
  price,
  favorited,
  locked,
  link
}) => {
  const route = useRouteMatch()
  return (
    <Link to={link ? `${route.path}/${link}` : undefined}>
      <Card
        hoverable
        className="course-list-item"
        style={{ width: '100%', textAlign: 'center' }}
        cover={(
          <div style={{position: 'relative'}}>
            <img alt="favorite" src={favorited ? starActivated : star} style={{position: 'absolute', top: 0, right: 0, margin: 8, }}/>
            {
              locked && <img alt="lock" src={lock} style={{position: 'absolute', top: '50%', left: '50%', margin: -12, width: 24, height: 24}}/>
            }
            <img alt="example" src={image} />
          </div>
        )}
      >
        <Card.Meta title={title} description={description}/>
        <p style={{color: price === 0 ? '#DA4981' : '#828486'}}>
          {price !== 0 ? `${price} ฿` : 'ฟรี'}
        </p>
      </Card>
    </Link>
  )
}

export default CourseListItem
