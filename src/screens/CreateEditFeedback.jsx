import React from "react";
import classes from "./styles/CreateEditFeedback.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import plus_icon from "../assets/icons/modal_plus_icon.svg";
import pen_icon from "../assets/icons/modal_pen_icon.svg";
import InputRow from "../components/InputRow";
import Arrow from "../components/UI/Arrow";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import SelectBox from "../components/UI/SelectBox";
import Container from "../components//Container";
import { useNavigate } from "react-router";
import cuid from "cuid";
import {
  ButtonWrapper,
  Icon,
  ModalTitle,
  TextareaWrapper,
  Wrapper,
} from "./styles/CreateEditFeedbackStyles";

const categories = [
  { label: "Feature" },
  { label: "UI" },
  { label: "UX" },
  { label: "Ehnhancement" },
  { label: "Bug" },
];

const statuses = [
  { label: "Planned" },
  { label: "In-Progress" },
  { label: "Live" },
];

const CreateEditFeedback = ({ edit, suggestions, handler }) => {
  const navigate = useNavigate();
  const params = useParams();
  const feedback = params.id
    ? { ...suggestions.find((suggestion) => suggestion.id === params.id) }
    : {};
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isDetailEmpty, setIsDetailEmpty] = useState(false);
  const [title, setTitle] = useState(edit ? feedback.title : "");
  const [detail, setDetail] = useState(edit ? feedback.details : "");
  const [category, setCategory] = useState(categories[0]);
  const [status, setStatus] = useState(statuses[0].label);
  const id = edit ? feedback.id : cuid();
  //const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title) setIsTitleEmpty(false);
    else setIsTitleEmpty(true);
    if (detail) setIsDetailEmpty(false);
    else setIsDetailEmpty(true);
    //Ask Abdulla why does not it work without timer
    if (title && detail) {
      handler(() => {
        return event.target.innerText === "Delete"
          ? [
              ...suggestions.filter(
                (suggestion) => suggestion.id !== feedback.id
              ),
            ]
          : [
              ...suggestions.filter((suggestion) => suggestion.id !== id),
              {
                id: id,
                title: title,
                details: detail,
                tag: category,
                status: status,
                upvotedByMe: feedback.upvotedByMe || false,
                upvotes: feedback.upvotes || 0,
                comments: feedback.comments || { quantity: 0, commentList: [] },
              },
            ];
      });
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleInputTitle = (event) => {
    setIsTitleEmpty(() => event.target.value.length !== 0 && false);
    setTitle(() => event.target.value.trim());
  };

  const handleInputDetail = (event) => {
    setIsDetailEmpty(() => event.target.value.length !== 0 && false);
    setDetail(() => event.target.value.trim());
  };

  const handleCategory = (category) => {
    setCategory(() => category);
  };

  const handleStatus = (status) => {
    setStatus(() => status);
  };

  let modalTitle = edit ? `Editing ‘${title}’` : "Create New Feedback";
  let icon = edit ? pen_icon : plus_icon;

  return (
    <Container className={classes.level_0}>
      <Container className={classes.level_1}>
        <Container>
          <Button
            kind="back"
            paint="transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            <Arrow direction="left" paint="#4661E6" />
            Go back
          </Button>
        </Container>
        <Wrapper edit={edit}>
          <Icon>
            <img src={icon} alt={`${icon}`} />
          </Icon>
          <ModalTitle>{modalTitle}</ModalTitle>
          <Container className={classes.level_2}>
            <InputRow
              title="Feedback Title"
              description="Add a short, descriptive headline"
            >
              <Input
                onChange={handleInputTitle}
                name="title"
                error={isTitleEmpty ? true : false}
                defaultValue={title}
              />
            </InputRow>
            <InputRow
              title="Category"
              description="Choose a category for your feedback"
            >
              <SelectBox
                name="options"
                options={categories}
                handleOption={handleCategory}
              >
                <Arrow direction="down" paint="#4661E6" />
              </SelectBox>
            </InputRow>
            {edit && (
              <InputRow
                title="Update Status"
                description="Change feedback state"
              >
                <SelectBox
                  name="statuses"
                  options={statuses}
                  handleOption={handleStatus}
                >
                  <Arrow direction="down" paint="#4661E6" />
                </SelectBox>
              </InputRow>
            )}
            <InputRow
              title="Feedback Detail"
              description="Include any specific comments on what should be improved, added,
            etc."
            >
              <TextareaWrapper>
                <Input
                  name="detail"
                  as="textarea"
                  onChange={handleInputDetail}
                  error={isDetailEmpty ? true : false}
                  defaultValue={detail}
                />
              </TextareaWrapper>
            </InputRow>
          </Container>
          <Container className={classes.level_3}>
            {edit && (
              <ButtonWrapper>
                <Button
                  className={classes.level_4}
                  kind="default"
                  type="button"
                  paint="#D73737"
                  onClick={handleSubmit}
                >
                  Delete
                </Button>
              </ButtonWrapper>
            )}
            <Container>
              <Button
                className={classes.level_4}
                kind="default"
                type="button"
                onClick={() => {
                  navigate("/");
                }}
                paint="#3A4374"
              >
                Cancel
              </Button>
            </Container>
            <Container>
              <Button
                className={classes.level_4}
                kind="default"
                paint="#AD1FEA"
                type="button"
                onClick={handleSubmit}
              >
                {edit ? "Save Changes" : "Add Feedback"}
              </Button>
            </Container>
          </Container>
        </Wrapper>
      </Container>
    </Container>
  );
};

export default CreateEditFeedback;
