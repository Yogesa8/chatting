import Martin from "./../src/assets/profile/Martin.png";
import Alice from "./../src/assets/profile/Alice.png";
import Charlie from "./../src/assets/profile/Charlie.png";
import Ethan from "./../src/assets/profile/Ethan.png";
import Ellen from "./../src/assets/profile/Ellen.png";
import Fiona from "./../src/assets/profile/Fiona.png";
import Hannah from "./../src/assets/profile/Hannah.png";
import Jack from "./../src/assets/profile/Jack.png";
import Julia from "./../src/assets/profile/Julia.png";
import Kevin from "./../src/assets/profile/Kevin.png";
import Malcolm from "./../src/assets/profile/Malcolm.png";
import Martinson from "./../src/assets/profile/Martinson.png";
import user from "./../src/assets/profile/user.png";

const initialState = { 
  selectedUser: null,
  Myprofile: { profilePicture: Martin },
  users: [
    {
      id: 1,
      name: "Jack Hendry",
      status: "Will update you",
      lastSeen: "Just now",
      online: true,
      profilePicture: Jack,
      chat: [
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Hai Martin. How are you?",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "I’m good, Jack! How about you?",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "I’m doing great, thanks!",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message:
            "Today we planned for an outing. You need to come and pick me up after my work.",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "Sounds good! What time should I pick you up?",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Around 6 PM, don’t be late!",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "Got it! I’ll be there!",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Awesome! Do you know where we’re going?",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "Not sure yet. Do you have a place in mind?",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message:
            "I was thinking of going to the beachside cafe. What do you think?",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message:
            "Sounds perfect! I’ve heard the sunset view there is amazing.",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Exactly! And the food there is great too!",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "I can’t wait! Should I pick anyone else up?",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Yeah, could you also pick up Lisa? She’s joining us.",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "Sure! Where should I pick her up from?",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message:
            "From her apartment near the main street. I’ll send you the location.",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "Got it! Just send me the location when you can.",
        },
        {
          sender: "Jack Hendry",
          receiver: "Martin",
          message: "Will do. See you at 6!",
        },
        {
          sender: "Martin",
          receiver: "Jack Hendry",
          message: "See you, buddy!",
        },
      ],
    },
    {
      id: 2,
      name: "Alice Smith",
      status: "Available",
      lastSeen: "5 minutes ago",
      online: true,
      profilePicture: Alice,
      chat: [
        {
          sender: "Alice Smith",
          receiver: "Martin",
          message: "Hey, are we still meeting up later?",
        },
        {
          sender: "Martin",
          receiver: "Alice Smith",
          message: "Yes! I’ll be there in 30 minutes.",
        },
        {
          sender: "Alice Smith",
          receiver: "Martin",
          message: "Perfect! I’m just finishing up work.",
        },
        {
          sender: "Alice Smith",
          receiver: "Martin",
          message: "I’ll wait for you at the cafe.",
        },
        {
          sender: "Martin",
          receiver: "Alice Smith",
          message: "Alright, see you soon!",
        },
        {
          sender: "Alice Smith",
          receiver: "Martin",
          message: "Can't wait! It's been a while.",
        },
        {
          sender: "Martin",
          receiver: "Alice Smith",
          message: "Same here, it's going to be fun!",
        },
      ],
    },
    {
      id: 3,
      name: "Bob Martinson",
      status: "Busy",
      lastSeen: "10 minutes ago",
      online: false,
      profilePicture: Martinson,
      chat: [
        {
          sender: "Bob Martinson",
          receiver: "Martin",
          message: "I’m in a meeting right now, I’ll get back to you soon.",
        },
        {
          sender: "Martin",
          receiver: "Bob Martinson",
          message: "No worries, take your time.",
        },
        {
          sender: "Bob Martinson",
          receiver: "Martin",
          message: "Thanks for understanding.",
        },
        {
          sender: "Martin",
          receiver: "Bob Martinson",
          message: "How’s the meeting going?",
        },
        {
          sender: "Bob Martinson",
          receiver: "Martin",
          message: "It’s alright, a bit long though.",
        },
        {
          sender: "Martin",
          receiver: "Bob Martinson",
          message: "Hope it finishes soon!",
        },
        {
          sender: "Bob Martinson",
          receiver: "Martin",
          message: "Me too! I’ll call you after.",
        },
      ],
    },
    {
      id: 4,
      name: "Charlie Brown",
      status: "Offline",
      lastSeen: "1 hour ago",
      online: false,
      profilePicture: Charlie,
      chat: [
        {
          sender: "Charlie Brown",
          receiver: "Martin",
          message: "I’ll check in with you later today.",
        },
        {
          sender: "Martin",
          receiver: "Charlie Brown",
          message: "Sure! Talk soon.",
        },
        {
          sender: "Charlie Brown",
          receiver: "Martin",
          message: "Sorry, I missed your message earlier!",
        },
        {
          sender: "Martin",
          receiver: "Charlie Brown",
          message: "No problem at all!",
        },
        {
          sender: "Charlie Brown",
          receiver: "Martin",
          message: "I’ll catch up with you this evening.",
        },
        {
          sender: "Martin",
          receiver: "Charlie Brown",
          message: "Sounds good! Looking forward to it.",
        },
        {
          sender: "Charlie Brown",
          receiver: "Martin",
          message: "Talk to you later!",
        },
      ],
    },
    {
      id: 5,
      name: "Diana Prince",
      status: "At work",
      lastSeen: "2 hours ago",
      online: false,
      profilePicture: user,
      chat: [
        {
          sender: "Diana Prince",
          receiver: "Martin",
          message: "I can’t talk right now, I’m at work.",
        },
        {
          sender: "Martin",
          receiver: "Diana Prince",
          message: "Got it! Hope your day is going well.",
        },
        {
          sender: "Diana Prince",
          receiver: "Martin",
          message: "It’s pretty busy, but I’ll be free later.",
        },
        {
          sender: "Martin",
          receiver: "Diana Prince",
          message: "No rush, we can chat when you’re done.",
        },
        {
          sender: "Diana Prince",
          receiver: "Martin",
          message: "Thanks for understanding.",
        },
        {
          sender: "Martin",
          receiver: "Diana Prince",
          message: "Anytime! Catch up later?",
        },
        {
          sender: "Diana Prince",
          receiver: "Martin",
          message: "Definitely! I'll message you when I'm free.",
        },
      ],
    },
    {
      id: 6,
      name: "Ethan Hunt",
      status: "In a meeting",
      lastSeen: "30 minutes ago",
      online: false,
      profilePicture: Ethan,
      chat: [
        {
          sender: "Ethan Hunt",
          receiver: "Martin",
          message: "I’m in a meeting right now, I’ll call you back after.",
        },
        {
          sender: "Martin",
          receiver: "Ethan Hunt",
          message: "Alright, just let me know when you’re free.",
        },
        {
          sender: "Ethan Hunt",
          receiver: "Martin",
          message: "Sure, shouldn’t be too long.",
        },
        {
          sender: "Martin",
          receiver: "Ethan Hunt",
          message: "Okay, I’ll wait for your call.",
        },
        {
          sender: "Ethan Hunt",
          receiver: "Martin",
          message: "Thanks for your patience!",
        },
        {
          sender: "Martin",
          receiver: "Ethan Hunt",
          message: "No problem at all!",
        },
        {
          sender: "Ethan Hunt",
          receiver: "Martin",
          message: "Talk soon!",
        },
      ],
    },
    {
      id: 7,
      name: "Fiona Gallagher",
      status: "Available",
      lastSeen: "15 minutes ago",
      online: true,
      profilePicture: Fiona,
      chat: [
        {
          sender: "Fiona Gallagher",
          receiver: "Martin",
          message: "Hey! What’s up?",
        },
        {
          sender: "Martin",
          receiver: "Fiona Gallagher",
          message: "Not much, just relaxing. What about you?",
        },
        {
          sender: "Fiona Gallagher",
          receiver: "Martin",
          message: "Same here, just got home.",
        },
        {
          sender: "Fiona Gallagher",
          receiver: "Martin",
          message: "We should hang out this weekend!",
        },
        {
          sender: "Martin",
          receiver: "Fiona Gallagher",
          message: "I’m up for it! Let’s plan something.",
        },
        {
          sender: "Fiona Gallagher",
          receiver: "Martin",
          message: "How about we go for a movie?",
        },
        {
          sender: "Martin",
          receiver: "Fiona Gallagher",
          message: "Sounds perfect!",
        },
      ],
    },
    {
      id: 8,
      name: "George Smith",
      status: "Away",
      lastSeen: "20 minutes ago",
      online: false,
      profilePicture: user,
      chat: [
        {
          sender: "George Smith",
          receiver: "Martin",
          message: "I’m away right now, I’ll reply when I’m back.",
        },
        {
          sender: "Martin",
          receiver: "George Smith",
          message: "No worries! Let me know when you're free.",
        },
        {
          sender: "George Smith",
          receiver: "Martin",
          message: "Will do, I’m just out for a while.",
        },
        {
          sender: "Martin",
          receiver: "George Smith",
          message: "Gotcha! I’ll wait.",
        },
        {
          sender: "George Smith",
          receiver: "Martin",
          message: "Back now, let’s catch up!",
        },
        {
          sender: "Martin",
          receiver: "George Smith",
          message: "Awesome! I’ve got some updates for you.",
        },
        {
          sender: "George Smith",
          receiver: "Martin",
          message: "Can’t wait to hear them!",
        },
      ],
    },
    {
      id: 9,
      name: "Hannah Montana",
      status: "Busy",
      lastSeen: "1 hour ago",
      online: false,
      profilePicture: Hannah,
      chat: [
        {
          sender: "Hannah Montana",
          receiver: "Martin",
          message: "I’m caught up in work. Can’t talk right now.",
        },
        {
          sender: "Martin",
          receiver: "Hannah Montana",
          message: "I totally understand, we can chat later.",
        },
        {
          sender: "Hannah Montana",
          receiver: "Martin",
          message: "Thanks for being patient. I’ll call you after work.",
        },
        {
          sender: "Martin",
          receiver: "Hannah Montana",
          message: "No problem! Talk soon.",
        },
        {
          sender: "Hannah Montana",
          receiver: "Martin",
          message: "Can’t wait to hear your updates!",
        },
        {
          sender: "Martin",
          receiver: "Hannah Montana",
          message: "Same here, it’s been too long!",
        },
        {
          sender: "Hannah Montana",
          receiver: "Martin",
          message: "Let’s catch up Martinorrow!",
        },
      ],
    },
    {
      id: 10,
      name: "Ian Malcolm",
      status: "Just chilling",
      lastSeen: "2 hours ago",
      online: false,
      profilePicture: Malcolm,
      chat: [
        {
          sender: "Ian Malcolm",
          receiver: "Martin",
          message: "Just chilling at home, how about you?",
        },
        {
          sender: "Martin",
          receiver: "Ian Malcolm",
          message: "I’m out shopping. You should join me!",
        },
        {
          sender: "Ian Malcolm",
          receiver: "Martin",
          message: "Sounds fun, but I’m too comfortable here.",
        },
        {
          sender: "Martin",
          receiver: "Ian Malcolm",
          message: "I get it! Let’s hang out later.",
        },
        {
          sender: "Ian Malcolm",
          receiver: "Martin",
          message: "Definitely, let’s plan something soon.",
        },
        {
          sender: "Martin",
          receiver: "Ian Malcolm",
          message: "I’ll message you when I’m free!",
        },
        {
          sender: "Ian Malcolm",
          receiver: "Martin",
          message: "Looking forward to it!",
        },
      ],
    },
    {
      id: 11,
      name: "Julia Roberts",
      status: "On a call",
      lastSeen: "5 minutes ago",
      online: true,
      profilePicture: Julia,
      chat: [
        {
          sender: "Julia Roberts",
          receiver: "Martin",
          message: "I’m on a call right now, can we chat later?",
        },
        {
          sender: "Martin",
          receiver: "Julia Roberts",
          message: "Of course, talk to you soon!",
        },
        {
          sender: "Julia Roberts",
          receiver: "Martin",
          message: "Thanks for understanding.",
        },
        {
          sender: "Martin",
          receiver: "Julia Roberts",
          message: "No problem, I’ll catch up with you later.",
        },
        {
          sender: "Julia Roberts",
          receiver: "Martin",
          message: "I’ll call you after my call.",
        },
        {
          sender: "Martin",
          receiver: "Julia Roberts",
          message: "Perfect, I’ll be around!",
        },
        {
          sender: "Julia Roberts",
          receiver: "Martin",
          message: "Great! Talk soon.",
        },
      ],
    },
    {
      id: 12,
      name: "Kevin Spacey",
      status: "Available",
      lastSeen: "Just now",
      online: true,
      profilePicture: Kevin,
      chat: [
        {
          sender: "Kevin Spacey",
          receiver: "Martin",
          message: "Hey! How’s it going?",
        },
        {
          sender: "Martin",
          receiver: "Kevin Spacey",
          message: "Pretty good, you?",
        },
        {
          sender: "Kevin Spacey",
          receiver: "Martin",
          message: "I’m doing great, just relaxing.",
        },
        {
          sender: "Martin",
          receiver: "Kevin Spacey",
          message: "Nice! What’s on the agenda for today?",
        },
        {
          sender: "Kevin Spacey",
          receiver: "Martin",
          message: "Not much, just catching up with some work.",
        },
        {
          sender: "Martin",
          receiver: "Kevin Spacey",
          message: "Sounds good, let’s hang out later!",
        },
        {
          sender: "Kevin Spacey",
          receiver: "Martin",
          message: "Definitely! We need to plan something soon.",
        },
      ],
    },
    {
      id: 13,
      name: "Laura Croft",
      status: "Traveling",
      lastSeen: "3 hours ago",
      online: false,
      profilePicture: Hannah,
      chat: [
        {
          sender: "Laura Croft",
          receiver: "Martin",
          message: "I’m traveling, I’ll reply later!",
        },
        {
          sender: "Martin",
          receiver: "Laura Croft",
          message: "No problem, enjoy your trip!",
        },
        {
          sender: "Laura Croft",
          receiver: "Martin",
          message: "Thanks! I’ll check in once I’m settled.",
        },
        {
          sender: "Martin",
          receiver: "Laura Croft",
          message: "Safe travels!",
        },
        {
          sender: "Laura Croft",
          receiver: "Martin",
          message: "I’ll be back in a week. Let’s catch up then.",
        },
        {
          sender: "Martin",
          receiver: "Laura Croft",
          message: "Can’t wait to hear about your adventures!",
        },
        {
          sender: "Laura Croft",
          receiver: "Martin",
          message: "I’ll have plenty of stories to tell!",
        },
      ],
    },
    {
      id: 14,
      name: "Sophie Turner",
      status: "Available",
      lastSeen: "30 minutes ago",
      online: true,
      profilePicture: user,
      chat: [
        {
          sender: "Sophie Turner",
          receiver: "Martin",
          message: "I’m free now, let’s chat!",
        },
        {
          sender: "Martin",
          receiver: "Sophie Turner",
          message: "Great! What’s new with you?",
        },
        {
          sender: "Sophie Turner",
          receiver: "Martin",
          message: "Just got back from a shoot.",
        },
        {
          sender: "Martin",
          receiver: "Sophie Turner",
          message: "Sounds exciting! How was it?",
        },
        {
          sender: "Sophie Turner",
          receiver: "Martin",
          message: "It was fun, but a bit tiring.",
        },
        {
          sender: "Martin",
          receiver: "Sophie Turner",
          message: "I can imagine! You deserve some rest.",
        },
        {
          sender: "Sophie Turner",
          receiver: "Martin",
          message: "Absolutely, I plan to relax this weekend.",
        },
      ],
    },
    {
      id: 15,
      name: "Hugh Jackman",
      status: "In rehearsal",
      lastSeen: "1 hour ago",
      online: false,
      profilePicture: Jack,
      chat: [
        {
          sender: "Hugh Jackman",
          receiver: "Martin",
          message: "I’m in rehearsal, can’t chat right now.",
        },
        {
          sender: "Martin",
          receiver: "Hugh Jackman",
          message: "No worries, we can catch up later!",
        },
        {
          sender: "Hugh Jackman",
          receiver: "Martin",
          message: "Thanks for being understanding.",
        },
        {
          sender: "Martin",
          receiver: "Hugh Jackman",
          message: "Anytime! Enjoy your rehearsal.",
        },
        {
          sender: "Hugh Jackman",
          receiver: "Martin",
          message: "I’ll call you once I’m done.",
        },
        {
          sender: "Martin",
          receiver: "Hugh Jackman",
          message: "Looking forward to it!",
        },
        {
          sender: "Hugh Jackman",
          receiver: "Martin",
          message: "Talk to you soon!",
        },
      ],
    },
    {
      id: 16,
      name: "Nicole Kidman",
      status: "Available",
      lastSeen: "10 minutes ago",
      online: true,
      profilePicture: Fiona,
      chat: [
        {
          sender: "Nicole Kidman",
          receiver: "Martin",
          message: "Hey babe! How was your day?",
        },
        {
          sender: "Martin",
          receiver: "Nicole Kidman",
          message: "It was good, just a bit long.",
        },
        {
          sender: "Nicole Kidman",
          receiver: "Martin",
          message: "I can imagine, you always have such a busy schedule.",
        },
        {
          sender: "Martin",
          receiver: "Nicole Kidman",
          message: "Yeah, but I’m looking forward to tonight.",
        },
        {
          sender: "Nicole Kidman",
          receiver: "Martin",
          message: "Same! I’m thinking of making dinner.",
        },
        {
          sender: "Martin",
          receiver: "Nicole Kidman",
          message: "Sounds great! What are you cooking?",
        },
        {
          sender: "Nicole Kidman",
          receiver: "Martin",
          message: "I’m planning to make some pasta!",
        },
      ],
    },
    {
      id: 17,
      name: "Ellen DeGeneres",
      status: "Filming",
      lastSeen: "1 hour ago",
      online: false,
      profilePicture: Ellen,
      chat: [
        {
          sender: "Ellen DeGeneres",
          receiver: "Martin",
          message: "I’m filming right now, will call you later.",
        },
        {
          sender: "Martin",
          receiver: "Ellen DeGeneres",
          message: "No problem, I’ll wait for your call!",
        },
        {
          sender: "Ellen DeGeneres",
          receiver: "Martin",
          message: "Thanks for understanding.",
        },
        {
          sender: "Martin",
          receiver: "Ellen DeGeneres",
          message: "Anytime, I’ll just relax while I wait.",
        },
        {
          sender: "Ellen DeGeneres",
          receiver: "Martin",
          message: "I’ll call you as soon as I’m free.",
        },
        {
          sender: "Martin",
          receiver: "Ellen DeGeneres",
          message: "I’m looking forward to hearing all about it!",
        },
        {
          sender: "Ellen DeGeneres",
          receiver: "Martin",
          message: "I can’t wait to tell you everything!",
        },
      ],
    },
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return {
        ...state,
        selectedUser: action.payload, // 🟢 Selected user update hoga
      };

    case "ADD_MESSAGE":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.userId
            ? {
                ...user,
                chat: [
                  ...user.chat,
                  {
                    sender: action.payload.sender,
                    receiver: action.payload.receiver,
                    message: action.payload.message,
                  },
                ],
              }
            : user
        ),
      };

    default:
      return state;
  }
};
