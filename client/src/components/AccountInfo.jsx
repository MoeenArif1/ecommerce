import React, { useEffect, useState } from 'react'
import { Divider, Row, Col } from 'antd';
import { useLoginContext } from './LoginContext';
import { useAppContext } from './appContext';

function AccountInfo() {
    const {loginContext}  = useLoginContext()
    const {appContext} = useAppContext()

    const [id, setId] = useState()
    const [userInfo, setUserInfo] = useState()
   
    useEffect(()=> {
        if (loginContext!= null) 
            setId(loginContext.id)
    }, [loginContext])

    useEffect(()=> {
        if (id){
            fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setUserInfo(data)
            });
        }
       
            
    }, [id])
    return (
        
        <>
            {
                userInfo? (
                    <div style={styles.container}>
            <Divider style={styles.divider}>Account Info</Divider>
            <Row style={styles.row}>
                <Col span={24} md={12}>
                    <p style={styles.text}>Name: {userInfo.firstName + ' '+ userInfo.lastName } </p>
                </Col>
     
                <Col span={24} md={12}>
                    <p style={styles.text}>Phone Number: {userInfo.phone}</p>
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

            <Divider style={styles.divider}>Address Info</Divider>
            <Row style={styles.row}>
                <Col span={24} md={12}>
                    <p style={styles.text}>Adress: {userInfo.address.address}</p>
                </Col>
                <Col span={24} md={12}>
                <p style={styles.text}>City: {userInfo.address.city}</p>
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
      };
      
export default AccountInfo