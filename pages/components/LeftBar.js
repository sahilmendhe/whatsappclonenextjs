import { IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, Search } from "@material-ui/icons";
import React from "react";
import Avatar from "./Avatar";
import Chatmember from "./Chatmember";

function LeftBar() {
  const users = [
    {
      id: "1",
      name: "Prateek Sahu",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg",
      message: "Hi",
      messagecount: "2",
    },
    {
      id: "2",
      name: "Piyush walde",
      imageUrl:
        "https://media.fashionnetwork.com/m/ab98/5c0b/2a03/e55d/acec/3104/aa8b/9500/6813/58f3/58f3.jpg",
      message: "Hello",
      messagecount: "5",
    },
    {
      id: "3",
      name: "Vedanti Kidile",
      imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      message: "Thike",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Virat Kohli",
      imageUrl:
        "https://c.ndtvimg.com/2022-09/22vdmisg_virat-kohli-afp_625x300_01_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "1",
      name: "M S Dhoni",
      imageUrl:
        "https://c.ndtvimg.com/2021-10/gjo8hnng_ms-dhoni-ipl_625x300_07_October_21.jpg",
      message: "hi",
      messagecount: "0",
    },
    {
      id: "2",
      name: "Ayush M",
      imageUrl:
        "https://media-exp2.licdn.com/dms/image/C5603AQHU1NMJEsYXYg/profile-displayphoto-shrink_200_200/0/1596036767112?e=2147483647&v=beta&t=zDt7VWTp_etPhSR2eOW5BYZ-XWTqxZoIDTLDbaQ5DsQ",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Vivek D",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      message: "hmm",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Sahil M",
      imageUrl:
        "https://i.pinimg.com/280x280_RS/84/47/a3/8447a31f56dd6045f39bdc86d75eea44.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Aditya",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Viprant",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      message: "fine",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Dhamma",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Sahil ",
      imageUrl:
        "https://i.pinimg.com/280x280_RS/84/47/a3/8447a31f56dd6045f39bdc86d75eea44.jpg",
      message: "whooa",
      messagecount: "0",
    },
    
    {
      id: "4",
      name: "Nishant",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Sahil Mendhe",
      imageUrl:
        "https://i.pinimg.com/280x280_RS/84/47/a3/8447a31f56dd6045f39bdc86d75eea44.jpg",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Piyush W",
      imageUrl:
        "https://media.fashionnetwork.com/m/ab98/5c0b/2a03/e55d/acec/3104/aa8b/9500/6813/58f3/58f3.jpg",
      message: "Yup",
      messagecount: "0",
    },
    {
      id: "4",
      name: "Pratik Sahu",
      imageUrl:
        "https://images.news18.com/ibnlive/uploads/2021/08/national-flag-16289132954x3.jpg",
      message: "some thing like this",
      messagecount: "19",
    },
    {
      id: "2",
      name: "Vedanti",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      message: "whooa",
      messagecount: "0",
    },
    {
      id: "3",
      name: "Sahil Mendhe",
      imageUrl:
        "https://i.pinimg.com/280x280_RS/84/47/a3/8447a31f56dd6045f39bdc86d75eea44.jpg",
      message: "Nice",
      messagecount: "0",
    },

  ];
  return (
    <div className="flex-25">
      <div className="flex flex-row justify-between bg-whatsapp-bgcolor p-2">
        <Avatar url="https://i.pinimg.com/280x280_RS/84/47/a3/8447a31f56dd6045f39bdc86d75eea44.jpg" />
        <div className="items-center">
          <IconButton className="focus:outline-none">
            <DonutLarge />
          </IconButton>
          <IconButton className="focus:outline-none">
            <Chat />
          </IconButton>
          <IconButton className="focus:outline-none">
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="bg-whatsapp-whitesmoke p-2">
        <div className="flex flex-row items-center rounded-full px-5 bg-whatsapp-white">
          <Search color="disabled" />
          <input
            placeholder="Search or Start a new chat"
            className="outline-none border-none w-full h-9 bg-whatsapp-white"
          />
        </div>
      </div>
      <div className="overflow-y-auto h-5/6 bg-scroll">
        {/* Chatmember */}
        {users.map((data, index) => (
          <Chatmember data={data} index={index} />
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
