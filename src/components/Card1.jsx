import React, { Component } from "react";

export default class Card1 extends Component {
  constructor() {
    super();
    this.PostsData = [
      {
        category: "News",
        title: "CNN Acquire BEME",
        text: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: "https://source.unsplash.com/user/erondu/600x400",
      },
      {
        category: "Travel",
        title: "Nomad Lifestyle",
        text: "Learn our tips and tricks on living a nomadic lifestyle",
        image: "https://source.unsplash.com/user/_vickyreyes/600x400",
      },
      {
        category: "Development",
        title: "React and the WP-API",
        text: "The first ever decoupled starter theme for React & the WP-API",
        image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      },
      {
        category: "News",
        title: "CNN Acquire BEME",
        text: "CNN purchased Casey Neistat's Beme app for $25million.",
        image: "https://source.unsplash.com/user/erondu/600x400",
      },
      {
        category: "Travel",
        title: "Nomad Lifestyle",
        text: "Learn our tips and tricks on living a nomadic lifestyle",
        image: "https://source.unsplash.com/user/_vickyreyes/600x400",
      },
      {
        category: "Development",
        title: "React and the WP-API",
        text: "The first ever decoupled starter theme for React & the WP-API",
        image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      },
    ];
    this.state = {
      posts: {},
    };
  }

  componentWillMount() {
    this.setState({
      posts: this.PostsData,
    });
  }

  render() {
    return (
      <div className="card1_background">
        <Title />
        <div className="app-card-list" id="app-card-list">
          {Object.keys(this.state.posts).map((key) => (
            <Card key={key} index={key} details={this.state.posts[key]} />
          ))}
        </div>
      </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
      <section className="app-title">
        <div className="app-title-content">
          <h1>Latest News</h1>
          <p>Covering March & April 2015</p>
        </div>
      </section>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>

        <h2>{this.props.title}</h2>

        <p className="body-content">{this.props.text}</p>

        <Button />
      </div>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader
          category={this.props.details.category}
          image={this.props.details.image}
        />
        <CardBody
          title={this.props.details.title}
          text={this.props.details.text}
        />
      </article>
    );
  }
}

// ReactDOM.render(
//     <Main />,
//     document.getElementById('app')
// );
