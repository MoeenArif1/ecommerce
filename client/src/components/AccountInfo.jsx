import React, { useEffect, useState } from 'react'
import { Divider, Row, Col, Button, message } from 'antd';
import { useLoginContext } from './LoginContext';
import { useAppContext } from './appContext';
import { useNavigate } from 'react-router-dom';

function AccountInfo() {
    const {loginContext, setLoginContext}  = useLoginContext()
    const {appContext, setAppContext} = useAppContext()
    const [loading, setLoading] = useState(false)

    // const [id, setId] = useState()
    // const [userInfo, setUserInfo] = useState()
    const navigate = useNavigate()
   
    // useEffect(()=> {
    //     if (loginContext!= null) 
    //         setId(loginContext.id)
    // }, [loginContext])

    // useEffect(()=> {
    //     if (id){
    //         fetch(`https://dummyjson.com/users/${id}`)
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setUserInfo(data)
    //         });
    //     }
       
            
    // }, [id])

    const processLogout = () => {
        setLoading(true)
        setLoginContext(null)
        setAppContext({cartCount: 0})
        navigate('/Home')
        message.success("Logged out Successfully")

        setLoading(false)

    }
    return (
        
        <>
            {
                loginContext? (
                    <div style={styles.container}>
            <Divider style={styles.divider}>Account Info</Divider>
            <Row style={styles.row}>
                <Col span={24} md={12}>
                    <p style={styles.text}>Name: {loginContext.firstName + ' '+ loginContext.lastName } </p>
                </Col>
     
                <Col span={24} md={12}>
                    <p style={styles.text}>Phone Number: {loginContext.phone}</p>
                </Col>
                <Col span={24} md={12}>
                    <p style={styles.text}>Gender: {loginContext.gender}</p>
                </Col>
            </Row>

            <Divider style={styles.divider}>Newsletter Info</Divider>
            <Row style={styles.row}>
    
                    {appContext.newsletter ? (
                        <>
                            <Col span={24} md={12}>
                                <p style={styles.text}>Subscribed to newsletter: {appContext.newsletter} </p>
                            </Col>
                            <Col span={24} md={12}>
                                <p style={styles.text}>NewsLetter Email: {appContext.newsLetterEmail}</p>

                            </Col>
                        </>
                    ) : (
                        <p style={styles.text}>Not Subscribed to Newsletter</p>
                    )}

            </Row>

            {/* <Divider style={styles.divider}>Address Info</Divider>
            <Row style={styles.row}>
                <Col span={24} md={12}>
                    <p style={styles.text}>Adress: {loginContext.address}</p>
                </Col>
      
                    </Row>*/}
            <Divider style={styles.divider}>Log Out</Divider>
            <Row style={styles.row}>
                <Col span={24} md={12}>
                    <div style={styles.logout}>
                        <Button type="primary" danger onClick={processLogout} loading= {loading}>
                        Log out
                        </Button>
                    </div>
                

                </Col>
            </Row>

     
        </div>
                ) : (
                    <div>Not found</div>
                )
            }
        </>
      );
    }

    const styles = {
        container: {
          marginTop: '5em',
          padding: '20px',
          display: 'flex',
    
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '90vh'
        
        },
        divider: {
          margin: '20px 0',
          fontWeight: 'bold',
          fontSize: '18px',
          flex: '1fr',
        },
        row: {
          marginBottom: '10px',
        },
        text: {
          margin: 0,
        },
        logout: {
            display: 'flex',
            justifyContent: 'center'
        }
      };
      
export default AccountInfo