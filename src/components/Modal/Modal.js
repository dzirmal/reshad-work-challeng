import React, { useCallback, useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import {
  Backdrop,
  ModalWrapper,
  ModalContent,
  CloseModalIcon,
} from './Modal.elements'

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  })

  // For Clicking on any place to close the modal
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  // For Pressing the Esc key to close the modal
  const escKeyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )
  // Call the useCallback function
  useEffect(() => {
    document.addEventListener('keydown', escKeyPress)
    return () => document.removeEventListener('keydown', escKeyPress)
  }, [escKeyPress])

  return (
    <>
      {showModal ? (
        <Backdrop ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1>This is a modal</h1>
                <p>all details should be here!</p>
              </ModalContent>
              <CloseModalIcon
                aria-label='Close Details'
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Backdrop>
      ) : null}
    </>
  )
}

export default Modal
