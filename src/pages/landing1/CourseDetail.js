import { Breadcrumb, Button, Col, Collapse, Result, Row, Skeleton, Tabs, Typography } from 'antd'
import React, { useRef, useState } from 'react'
import star from '../../images/landing1/star_border.png'
import network from '../../images/landing1/account_tree.png'
import computer from '../../images/landing1/card_membership.png'
import starActivated from '../../images/landing1/star_activated.png'
import lecturer from '../../images/landing1/lecturer.png'
import errorImg from '../../images/landing1/error.png'
import download from '../../images/landing1/download.png'
import { Link } from 'react-router-dom'
import { courses } from '../../components/landing1/CourseList'
import CourseListItem from '../../components/landing1/CourseListItem'
import YouTube from 'react-youtube'
import { useAsync, useInterval } from 'react-use'
import PopUpQuiz from '../../components/landing1/PopUpQuiz'
import GoogleSheetDB from '../../utils/GoogleSheetDB'
const googleSheetDB = new GoogleSheetDB()
const quizes = [
  {
    id: 1,
    question: () => (<span>ข้อใด <em>ไม่ใช่</em> องค์ประกอบของ Resilience ?</span>),
    choices: [
      'แหล่งสนับสนุนและทรัพยากรภายนอก (I have)',
      'การมีจิตใจที่เข้มแข็ง (I am)',
      'ความเชื่อมั่นในการเปลี่ยนแปลงและโอกาส (I will)',
      'ทักษะความสามารถในการแก้ปัญหา (I can)'
    ],
    time: 6*60
    // time: 0
  },
  {
    id: 2,
    question: () => (<span>ข้อใด <em>กล่าวถูกต้อง</em> เกี่ยวกับ Meaning in life ?</span>),
    choices: [
      'เป็นองค์ประกอบหนึ่งทางจิตวิทยาเป็นความสามารถที่จะยืนหยัดทำเป้าหมายของชีวิต',
      'ช่วยส่งเสริมอารมณ์เชิงบวกมากขึ้น ป้องกันภาวะซึมเศร้าได้ และทำให้มีความแข็งแกร่งไม่ย่อท้อต่ออุปสรรคมากขึ้น',
      'เป็นการตระหนักรู้ถึงปัจจุบันขณะของชีวิตและความหมายของการเปลี่ยนแปลงในชีวิต',
      'ต้องคำนึงว่าเป็นประโยชน์ต่อคนอื่นหรือไม่ หากไม่เป็น ประโยชน์แต่เรารัก ก็ไม่ถือว่าเป็น meaning in life'
    ],
    time: 8*60 + 30
  },
  {
    id: 3,
    question: () => (<span>ข้อใด <em>กล่าวผิด</em> เกี่ยวกับ Mindfulness ?</span>),
    choices: [
      'หลักการพื้นฐานของการฝึกให้มี mindfulness คือ ฝึกสังเกตการเปลี่ยนแปลงที่เกิดขึ้นกับร่างกาย และฝึกเพ่งความสนใจไปที่สิ่งสิ่งนั้น',
      'เป็นความสามารถในการรับรู้ตนเองในปัจจุบันขณะหรือการมีสติ',
      'ความเชื่อมั่นในการเปลี่ยนแปลงและโอกาส (I will)',
      'ทักษะความสามารถในการแก้ปัญหา (I can)'
    ],
    time: 11*60 + 37
  },
  {
    id: 4,
    question: () => (<span>ในวันที่ใจเหนื่อย Grit ช่วยให้เราเป็นอย่างไร ?</span>),
    choices: [
      'ช่วยให้เรารู้ถึงการเปลี่ยนแปลงของอารมณ์ความรู้สึกเหนื่อย ๆ ของตัวเองได้รวดเร็วและแก้ไขสถานการณ์ได้อย่างทันถ่วงที',
      'ช่วยให้เรายอมรับและเข้าใจในสิ่งที่ตัวเองเป็นแม้ในวันที่เหนื่อย ผิดพลาด หรือเกิดความทุกข์',
      'ช่วยให้เราตระหนักถึงคุณค่าของสิ่งที่มีสิ่งอื่น ๆ นอกเหนือจากความเหนื่อยหรือความทุกข์',
      'ช่วยให้เรายังยืนหยัดและแน่วแน่ในการทำตามเป้าหมายได้แม้ในวันที่เหนื่อย'
    ],
    time: 17*60 + 29
  },
  {
    id: 5,
    question: () => (<span>ข้อใด <em>กล่าวผิด</em> เกี่ยวกับองค์ประกอบทางจิตวิทยาที่มีส่วนช่วยในการฟื้นคืนกลับสู่สมดุล (Resilience) จากวันที่ใจเหนื่อยได้ ?</span>),
    choices: [
      'เมื่อตระหนักถึงคุณค่าของสิ่งอื่น ๆ ที่ตนเองมีอยู่ (gratitude) จะทำให้บุคคลเกิดความผูกพันกับสิ่งเหล่านั้นและจะยืนหยัดในการรักษาสิ่งเหล่านั้นไว้อย่างไม่ย่อท้อ',
      'เมื่อมีสติ (mindfulness) ก็จะช่วยให้บุคคลรับรู้อารมณ์และ ประเด็นปัญหาได้อย่างรวดเร็วและสามารถใช้ความเข้าใจที่มียอมรับเรื่องราวที่เกิดขึ้นได้อย่างรวดเร็ว',
      'เมื่อเกิดความกรุณาต่อตนเองในใจขึ้น (self-compassion) จะเกิดการฟื้นคืนและอนุญาตให้ตัวเองลุกขึ้นมาแก้ไขให้ทุกสิ่งดีขึ้นกว่าที่เคยเป็น',
      'เมื่อตระหนักถึงคุณค่าและความหมายของการมีชีวิตอยู่ (meaning in life) แม้จะเจอความยากลำบากเพียงใด ก็จะสามารถพาตัวเองกลับมาสู่ภาวะปกติเพื่อเดินหน้าต่อไปได้'
    ],
    time: 20*60 + 18
  },
]

const CourseDetail = () => {
  const [player, setplayer] = useState()
  const [timeplayed, settimeplayed] = useState(0)
  const [nextQuiz, setnextQuiz] = useState(0)
  const popUpQuizRef = useRef()
  const {
    loading,
    error,
  } = useAsync(() => {
    return googleSheetDB.auth()
  })
  useInterval(() => {
    if (!player) {
      return
    }
    // check time played
    const currentTime = player.getCurrentTime()
    console.log(currentTime)
    if (currentTime >= quizes[nextQuiz].time) {
      if (nextQuiz > quizes.length - 1) {
        // end quiz
        // open finish quiz modal
        return
      }
      // open quiz modal with next quiz
      player.pauseVideo()
      openModal(quizes[nextQuiz])
      setnextQuiz((nextQuiz) => nextQuiz + 1)
    }
  }, 1000)
  const openModal = (quiz) => {
    popUpQuizRef.current.open(quiz)
  }
  const handlePlayerReady = (event) => {
    const player = event.target
    setplayer(player)
  }
  if (loading) {
    return <Skeleton />
  }
  if (error) {
    return <Result status="error" title={error.message} />
  }
  return (
    <div class="container">
      <Breadcrumb>
        <Breadcrumb.Item>
          หน้าแรก
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          คอร์สเรียน
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          ทำยังไงในวันที่ใจเหนื่อย
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="space-between" align="middle">
        <Col >
          <Row align="middle">
            <Typography.Text style={{color: '#E3739E', fontSize: '2em'}}>
              ทำยังไงในวันที่ใจเหนื่อย
            </Typography.Text>
            <div style={{display: 'inline-block'}}>
              <img width="32" style={{padding: 4}} src={star} alt="faviroite" />
              <img width="32" style={{padding: 4}} src={network} alt="faviroite" />
              <img width="32" style={{padding: 4}} src={computer} alt="faviroite" />
            </div>
          </Row>
        </Col>
        <Col>
          <Button.Group>
            <Button>
              0 บาท
            </Button>
            <Button type="primary">
              เรียนเลย
            </Button>
          </Button.Group>
        </Col>
      </Row>
      <Row align="middle">
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <img src={starActivated} alt="star" />
        <Typography.Text style={{fontSize: '0.8em', color: 'grey', paddingLeft: 24}}>
          4.5/5 (19 รีวิว)
        </Typography.Text>
      </Row>
      <Row style={{marginTop: 24}} gutter={24}>
        <Col xs={24} sm={16}>
          <YouTube
            videoId="mwGCF5-yILA"
            opts={{
              height: '390',
              width: '640',
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
              }
            }}
            onReady={handlePlayerReady}
          />
        </Col>
        <Col xs={24} sm={8}>
          <Collapse>
            <Collapse.Panel header="ทำยังไงในวันที่ใจเหนื่อย">
              <a href="https://drive.google.com/file/d/1cQISqGVf-7cYRxKNrkFRx8nV-GDuXahD/view?usp=sharing" target="_blank">
                <Row>
                  <img src={download} alt="download" />
                  <Typography.Text style={{paddingLeft: 12}}>
                    เอกสารประกอบการเรียน
                  </Typography.Text>
                </Row>
              </a>
            </Collapse.Panel>
          </Collapse>
        </Col>
      </Row>
      <Tabs key="1" style={{marginTop: 24}}>
        <Tabs.TabPane key="1" tab="เกี่ยวกับ">
          <div style={{padding: 24}}>
            <div>
              <Typography.Text>
                ในยุคที่วิกฤตการณ์ต่าง ๆ ถาโถมเข้ามาแบบที่ตั้งตัวแทบไม่ทัน จิตใจของเราคงจะไหวหวั่นไม่น้อยถึงแม้ว่าจะมีใครต่อใครพูดกับเราว่าฟ้าหลังฝนย่อมดีเสมอ ขอแค่ให้เราก้าวผ่านมันมาให้ได้แล้วตัวเราจะเก่งขึ้นแต่มันก็เป็นวิธีที่ยากเหลือเกินสำหรับใครบางคน ... แล้วจะทำยังไงหล่ะในวันที่ใจเหนื่อยขนาดนี้วิดีโอนี้จะชวนทุกคนมาทำความรู้จักและเข้าใจกับ ความยืดหยุ่นทางจิตใจ หรือ  Resilienceเป็นความสามารถของคนเราในการพาตัวเองกลับสู่ความสมดุลของชีวิต เป็นการตอบสนองเชิงบวกทำให้เกิดการปรับตัวให้สามารถก้าวข้ามอุปสรรค์และความทุกข์ในชีวิต ความสามารถในการฟื้นคืนสู่สมดุลหมายความว่าอย่างไรอีกบ้าง Resilence มีองค์ประกอบอะไรบ้าง  หนทางที่จะเปลี่ยนแปลงให้เรากลับสู่สมดุลจากภาวะเครียดนั้นทำได้อย่างไรหากเราฝึกให้ตัวเรามีความยืดหยุ่นทางจิตใจที่ดีแล้วชีวิตจะเป็นอย่างไร มาเรียนรู้ทักษะนี้ไปพร้อมกันเลย : )
              </Typography.Text>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{marginTop: 24}}>
                <Typography.Text style={{fontSize: '1.4em'}}>
                  สอนโดย
                </Typography.Text>
              </div>
              <div style={{marginTop: 24}}>
                <img src={lecturer} alt="lecturer" />
              </div>
              <div style={{marginTop: 24}}>
                <Typography.Text>
                  พี่วิว<br/>
                  นักจิตวิทยาฝึกหัดระดับปริญญาโท<br/>
                  คณะจิตวิทยา จุฬาลงกรณ์มหาวิทยาลัย<br/>
                  เจ้าของเพจดูแลใจกัน เพจแชร์ความรู้ทางจิตวิทยา<br/>
                  เพื่อคนที่อยากดูแลใจตัวเองให้แข็งแรงและมีความสุข<br/>
                </Typography.Text>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key="2" tab="รีวิว">
          <Result icon={<img width="120" src={errorImg} alt="error" />} title="พบกับฟีเจอร์รีวิวได้ในเร็วๆนี้" />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" tab="ห้องสนทนา">
        <Result icon={<img width="120" src={errorImg} alt="error" />} title="พบกับฟีเจอร์ห้องสนทนาได้ในเร็ว ๆ นี้" />
        </Tabs.TabPane>
      </Tabs>
      <Typography.Title level={3}>
        คอร์สแนะนำ
      </Typography.Title>
      <Row gutter="24">
        {
          courses.filter(f => [3,4].indexOf(f.id) !== -1).map(course => {
            return (
              <Col xs={12} md={8} lg={6}>
                <CourseListItem image={course.image} title={course.title} description={course.description} price={course.price} favorited={course.favorited} locked={course.locked} link={course.link}/>
              </Col>
            )
          })
        }
      </Row>
      <PopUpQuiz ref={popUpQuizRef} player={player} className={'landing1-theme'} googleSheetDB={googleSheetDB}/>
    </div>
  )
}

export default CourseDetail
