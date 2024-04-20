'use client'
import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from 'react-icons/io5';
import Image from 'next/image';
import Chat_Bot_Logo from '@/Images/Chat_Bot_Logo.png';

export const KrishChat: React.FC = () => {
  // State to hold the message typed in the input field
  const [message, setMessage] = useState<string>('');
  // State to hold all messages in the first chat section
  const [messages, setMessages] = useState<string[]>([]);
  // State to hold all messages in the second chat section
  const [aiMessages, setAiMessages] = useState<string[]>([]);
  // Ref for the chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);
  // State to track whether the welcome message should be displayed
  const [showWelcomeMessage, setShowWelcomeMessage] = useState<boolean>(true);
  // State to track whether to show the "Hello" div
  const [showHelloDiv, setShowHelloDiv] = useState<boolean>(false);

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);

    // Show the welcome message only if it's the first message and the chatbox is empty
    if (showWelcomeMessage && messages.length === 0 && e.target.value.trim() === '') {
      setShowWelcomeMessage(true);
    } else {
      setShowWelcomeMessage(false);
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent): void => {
    // Hide the welcome message when the user presses Enter and the input is not empty
    if (e.key === 'Enter' && message.trim() !== '') {
      setShowWelcomeMessage(false);
      handleSendMessage(); // Optionally, you can call the function to send the message here
    }
  };

  // Function to handle button click (sending message to the API)
  const handleSendMessage = async (): Promise<void> => {
    // Check if the input message is not empty
    if (message.trim() !== '') {
      // Add the current message to the list of messages in the first chat section
      setMessages([...messages, message]);
      // Call the API with the message
      try {
        // Your API call logic here...
      } catch (error) {
        console.error(error);
      }
      // Clear the input field
      setMessage('');
      // Hide the welcome message after sending the first message
      setShowWelcomeMessage(false);
    }
  };

  // Scroll the chat container to the bottom with smooth scrolling effect
  const scrollToBottom = (): void => {
    const scrollHeight = chatContainerRef.current?.scrollHeight || 0;
    const scrollTop = chatContainerRef.current?.scrollTop || 0;
    const clientHeight = chatContainerRef.current?.clientHeight || 0;
    const scrollDifference = scrollHeight - scrollTop - clientHeight;
    const scrollDuration = 1000; // 2 seconds

    let start: number | undefined;

    const step = (timestamp: number): void => {
      if (!start) start = timestamp;
      const timeElapsed = timestamp - start;
      const scrollAmount = easeInOutQuad(timeElapsed, scrollTop, scrollDifference, scrollDuration);
      chatContainerRef.current!.scrollTop = scrollAmount;
      if (timeElapsed < scrollDuration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // Easing function for smooth scrolling effect
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // Scroll to bottom on mount and when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, aiMessages]);

  // Effect to show "Hello" div when a new message is received
  useEffect(() => {
    if (aiMessages.length > 0) {
      setShowHelloDiv(true);
    }
  }, [aiMessages]);

  return (
    <div className="flex">
      {/* Profile section */}
      {/* <div className="w-[600px] h-screen ">Profile Section</div> */}

      {/* Main chat section */}
      <div className="w-full h-screen  overflow-hidden">
        <div className="w-full h-[40px]"></div>

        {/* Chat inbox */}
        <div
          ref={chatContainerRef}
          className="w-[44vh] md:w-[125vh]   md:ml-[40vh] h-5/6 mx-3 bg-white text- overflow-y-auto overflow-auto"
          style={{ wordWrap: 'break-word' }}
        >
          {/* Display welcome message when chatbox is empty and user starts typing */}
          {showWelcomeMessage && (
            <div className="text-center  w-full h-full text-gray-100 flex justify-center items-center">
              <div className="flex-row ">
                <div className="w-16 h-16 mx-44  rounded-full ">
                  {/* <Image src={Chat_Bot_Logo} /> */}
                </div>
                <h1 className="text-2xl ml-5 w-4/5 font-bold text-black">Hello job seekers how can I help you</h1>
              </div>
            </div>
          )}

          {/* Display "Hello" div when a new message is received */}
          {showHelloDiv && (
            <div className="text-center w-full h-full text-gray-100 flex justify-center items-center">
              <h1 className="text-2xl py-1 font-bold text-black">Hello</h1>
            </div>
          )}

          {/* Display all messages from the user */}
          {messages.map((msg, index) => (
            <>
              <h2 key={index} className="mr-16 -py-1 flex gap-3 font-[1000] justify-end">
                <div className="-p-1 w-6 h-6 text-right bg-blue-900 rounded-full"></div>Krishna Sharma
              </h2>

              <div key={index} className="py-4 px-12 ml-24 text-right text-wrap">
                {msg}
              </div>
              <h2 key={index} className="mr-16 -py-1 flex gap-3 font-[1000] ">
                <div className="-p-1 w-6 h-6 text-right  rounded-full">
                  {/* <Image src={Chat_Bot_Logo} /> */}
                </div>
                Satan
              </h2>
              <div key={index} className="py-3 px-12 text-md text-wrap mr-24 ">
                {msg}
              </div>
            </>
          ))}
        </div>

        {/* Input section */}
        {/* <div className="flex items-center  mt-12 md:mt-6 justify-between w-62 md:w-[130vh] p-1 ml-2  md:ml-60 rounded-xl bg-gray-100">
          
          <input
            type="text"
            placeholder="Type something..."
            className="w-[50vh] px-4 py-2 mr-4 text-black bg-gray-100 rounded-lg border-r-none focus:outline-none break-all"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />

          <button
            className="px-4 py-2 text-whiterounded-lg focus:outline-none overflow-y-auto overflow-x-hidden"
            onClick={handleSendMessage}
            style={{ wordWrap: 'break-word' }}
          >
            <IoSend className=" text-black" size={20} />
          </button>
          
        </div> */}
         <div className="flex items-center justify-between w-62 md:w-[130vh] p-1 ml-2 md:ml-60 rounded-xl bg-gray-100">
          <input
            type="text"
            placeholder="Type something..."
            className="w-[50vh] px-4 py-2 mr-4 text-black bg-gray-100 rounded-lg border-r-none focus:outline-none break-all"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />

          <button
            className="px-4 py-2 text-whiterounded-lg focus:outline-none overflow-y-auto overflow-x-hidden"
            onClick={handleSendMessage}
            style={{ wordWrap: 'break-word' }}
          >
            <IoSend className=" text-black" size={20} />
          </button>
        </div>
        {/* <h4 className="flex justify-center ml-3 w-3/2 py-3 md:py-4 font-bold text-xs">
          Given Sanatas's fallibility, it's prudent to verify crucial information diligently..
        </h4> */}
      </div>

      {/* Other section */}
      {/* <div className="w-[600px] h-screen flex justify-end align-bottom ">
        <div className="absolute bottom-0 right-0 mr-6 mb-6 w-16 h-16 bg-violet-500 rounded-full"></div>
      </div> */}
    </div>
  );
};

