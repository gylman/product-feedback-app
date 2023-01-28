import React, { useReducer } from "react";
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

const titleReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isEmpty: action.val.length === 0 };
  }
  if (action.type === "INPUT_NO_EMPTY") {
    return { value: state.val, isEmpty: action.val };
  }
  return { value: "", isEmpty: false };
};

const detailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isEmpty: action.val.length === 0 };
  }
  if (action.type === "INPUT_NO_EMPTY") {
    return { value: state.val, isEmpty: action.val };
  }

  return { value: "", isEmpty: false };
};

const CreateEditFeedback = ({ edit, suggestions, handler }) => {
  const navigate = useNavigate();
  const params = useParams();
  const feedback = params.id
    ? { ...suggestions.find((suggestion) => suggestion.id === params.id) }
    : {};

  const [titleState, dispatchTitle] = useReducer(titleReducer, {
    value: edit ? feedback.title : "",
    isEmpty: false,
  });

  const [detailState, dispatchDetail] = useReducer(detailReducer, {
    value: edit ? feedback.details : "",
    isEmpty: false,
  });

  const [category, setCategory] = useState(categories[0].label);
  const [status, setStatus] = useState(statuses[0].label);
  const id = edit ? feedback.id : cuid();
  //const [formData, setFormData] = useState({});

  const handleTitle = (event) => {
    dispatchTitle({ type: "USER_INPUT", val: event.target.value.trim() });
  };

  const handleDetail = (event) => {
    dispatchDetail({ type: "USER_INPUT", val: event.target.value.trim() });
  };

  const handleCategory = (category) => {
    setCategory(() => category);
  };

  const handleStatus = (status) => {
    setStatus(() => status);
  };

  let modalTitle = edit
    ? `Editing ‘${titleState.value}’`
    : "Create New Feedback";
  let icon = edit ? pen_icon : plus_icon;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (titleState.value) dispatchTitle({ type: "INPUT_NO_EMTPY", val: false });
    else dispatchTitle({ type: "INPUT_NO_EMTPY", val: true });
    if (detailState.value)
      dispatchDetail({ type: "INPUT_NO_EMTPY", val: false });
    else dispatchDetail({ type: "INPUT_NO_EMTPY", val: true });
    //Ask Abdulla why does not it work without timer
    if (titleState.value && detailState.value) {
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
                title: titleState.value,
                details: detailState.value,
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
                onChange={handleTitle}
                name="title"
                id="title"
                error={titleState.isEmpty ? true : false}
                defaultValue={titleState.value}
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
                  id="detail"
                  as="textarea"
                  onChange={handleDetail}
                  error={detailState.isEmpty ? true : false}
                  defaultValue={detailState.value}
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
