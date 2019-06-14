import React, { Component } from "react";
import Profile from "./Profile";
import { edit } from "../../services/authService";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    if (!user._id) {
      this.props.history.push("/");
    }
    this.state = {
      profile: {
        name: user.name,
        lastname: user.lastname,
        image: user.image
      }
    };
  }

  handleChange = e => {
    const field = e.target.name;
    const { profile } = this.state;
    profile[field] = e.target.value;
    this.setState(profile);
  };

  handleSubmit = e => {
    e.preventDefault();
    let { formData } = this.state;
    const { profile } = this.state;
    if (!formData) {
      formData = new FormData();
    }

    for (const field in profile) {
      if (profile.hasOwnProperty(field)) {
        const element = profile[field];
        formData.append(field, element);
      }
    }

    edit(formData)
      .then(data => {
        const { user } = data;
        this.props.setUser(user);
      })
      .catch(error => {
        console.log(error);
      });
  };

  setImage = e => {
    const image = e.target.files[0];
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      let { profile } = this.state;
      profile.image = reader.result;
      this.setState({ profile });
      this.setState({ formData });
    };
  };

  render() {
    const { profile } = this.state;
    return (
      <section
        className="uk-section uk-section-small "
        uk-height-viewport="offset-top: true; expand: true"
      >
        <Profile
          {...profile}
          setImage={this.setImage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    );
  }
}

export default ProfileContainer;
