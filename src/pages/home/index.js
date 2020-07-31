import React, { useState, useEffect } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card, 
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardDeck,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Toast,
    ToastBody,
    ToastHeader,
  } from 'reactstrap';

import './style.css'

import HomeImage from '../../assets/images/homeImage.jpg';

import {ArrayUp, ArrayDown} from '../../api'

const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [arrayUp, setArrayUp] = useState([]);
    const [arrayDown, setArrayDown] = useState([]);
    const [unDelete, setUnDelete] = useState(null);
    const [lastStore, setLastStore] = useState({});
    const [unDelete1, setUnDelete1] = useState(null);
    const [lastStore1, setLastStore1] = useState({});
    const [modalTitle, setModalTitle] = useState(null);
    const [modalText, setModalText] = useState(null);

    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = (event) => {
        const choose = Number(event.target.name);
        setModalTitle(arrayUp[choose].title)
        setModalText(arrayUp[choose].text)
        setModal(!modal);
    }
    const toggle3 = () => setModal(!modal);

    useEffect(() => {
        // Supost API POST/GET
        setArrayUp(ArrayUp);
        setArrayDown(ArrayDown)
    }, []);

    
    function handleDeleteUp(event) {
        setUnDelete(true);
        console.log(event.target.name)
        const choose = Number(event.target.name)
        setArrayUp(prevItems => {
            return prevItems.filter((codItem, index) => {
                if(index === choose) {
                    setLastStore(codItem);
                }
                return index !== choose;
            })
        })
    }

    function handleDeleteDown(event) {
        setUnDelete1(true);
        console.log(event.target.name)
        const choose = Number(event.target.name)
        setArrayDown(prevItems => {
            return prevItems.filter((codItem, index) => {
                if(index === choose) {
                    setLastStore1(codItem);
                }
                return index !== choose;
            })
        })
        
    }

    function handleUnDelete() {
        setArrayUp(prevItems => {
            setUnDelete(false);
            return [
                ...prevItems,
                lastStore
            ]
        })
    }
    function handleUnDelete1() {
        setArrayDown(prevItems => {
            setUnDelete1(false);
            return [
                ...prevItems,
                lastStore1
            ]
        })
    }
    


    return (
        <div>
            <div>
            <Navbar color='00005c'style={{backgroundColor: '#00004d'}} light expand="md">
                <NavbarBrand style={{color: 'white', marginLeft: '10px'}} href="/">Rz Sistemas</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <DropdownToggle style={{color: 'white', marginLeft: '100px'}} nav caret>
                        Sistema ERP
                    </DropdownToggle>
                    <DropdownToggle style={{color: 'white', marginLeft: '10px'}} nav caret>
                        Sistemas Específicos
                    </DropdownToggle>
                    <NavItem>
                    <NavLink style={{color: 'white', marginLeft: '10px'}} href="/">Blog</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle style={{color: 'white', marginLeft: '10px'}} nav caret>
                        Downloads
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Option 1
                        </DropdownItem>
                        <DropdownItem>
                        Option 2
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Reset
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                    <NavLink style={{color: 'white', marginLeft: '10px'}} href="/">Erp OnLine</NavLink>
                    </NavItem>
                    <DropdownToggle style={{color: 'white', marginLeft: '10px'}} nav caret>
                        Sobre
                    </DropdownToggle>
                    <NavItem>
                    <NavLink style={{color: 'white', marginLeft: '10px'}} href="/">Contato Rz Sistemas</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink style={{color: 'white', marginLeft: '10px'}} href="/">Buscar no Site</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
            <img src={HomeImage} alt=''/>
            <div>
                <h1>
                    Sistemas ERP e softwares da RZ Sistemas
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, suspendisse pharetra libero pulvinar, lectus quis nullam in velit nisl sit. Odio proin dolor, dis quia, dignissim libero volutpat blandit ac luctus, facilisis donec. Eros risus, eu vel feugiat scelerisque nunc in. Quam neque vitae, lorem ligula interdum et. Sit justo, dictumst metus, donec.
                </p>
            </div>
            {unDelete ? (
                <Toast className='tost'>
                    <ToastHeader icon="danger">
                    Atenção
                    </ToastHeader>
                    <ToastBody>
                    <Button style={{margin:'10px'}} outline color="danger" size='sm' onClick={handleUnDelete} >Desfazer ação</Button>
                    </ToastBody>
                </Toast>
            ) : null}
            {unDelete1 ? (
                <Toast className='tost'>
                    <ToastHeader icon="danger">
                    Atenção
                    </ToastHeader>
                    <ToastBody>
                    <Button style={{margin:'10px'}} outline color="danger" size='sm' onClick={handleUnDelete1} >Desfazer ação</Button>
                    </ToastBody>
                </Toast>
            ) : null}
            <CardDeck style={{marginRight: '20px', marginLeft: '20px'}}>
                {arrayUp.map((item, index) => {
                    return (
                        <Card key={index}>
                            <Button style={{position: 'absolute', right: '10px'}} color="link" name={index} onClick={handleDeleteUp}>Deletar</Button>
                            <CardImg style={{width: '30%', display:'block', marginLeft:'auto', marginRight: 'auto', marginTop: '30px'}} src={item.image} alt="Card image cap" />
                            <CardBody>
                            <CardTitle style={{textAlign: 'center', color: '#116979'}}>{item.title}</CardTitle>
                            <CardText style={{textAlign: 'center', color: '#116979'}}> {item.text} </CardText>
                            <Button style={{width:'40%', marginLeft:'30%', marginRight:'30%'}} outline color="info" name={index} onClick={toggle2}>Informação</Button>
                            </CardBody>
                        </Card>
                    )
                })}
            </CardDeck>
            <br/>
            <CardDeck style={{marginRight: '20px', marginLeft: '20px', marginBottom: '30px'}}>
                {arrayDown.map((item, index) => {
                        return (
                            <Card key={index} >
                                <Button style={{position: 'absolute', right: '10px'}} color="link" name={index} onClick={handleDeleteDown}>Deletar</Button>
                                <CardImg style={{width: '30%', display:'block', marginLeft:'auto', marginRight: 'auto', marginTop: '30px'}} src={item.image} alt="Card image cap" />
                                <CardBody>
                                <CardTitle style={{textAlign: 'center', color: '#116979'}}>{item.title}</CardTitle>
                                <CardText style={{textAlign: 'center', color: '#116979'}}> {item.text} </CardText>
                                <Button style={{width:'40%', marginLeft:'30%', marginRight:'30%'}} outline color="info" onClick={toggle2}>Informação</Button>
                                </CardBody>
                            </Card>
                        )
                    })}
            </CardDeck>
            <Modal isOpen={modal} toggle={toggle3}>
                <ModalHeader toggle={toggle3}>{modalTitle}</ModalHeader>
                <ModalBody>
                {modalText}
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle3}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle3}>Cancel</Button>
                </ModalFooter>
            </Modal>
            
        </div>
    )
}

export default Home;