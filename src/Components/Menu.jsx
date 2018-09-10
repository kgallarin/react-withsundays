import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  menu: {
    color: theme.palette.primary.main
  },
  menuContainer: {
    background: theme.palette.secondary.dark
  }
});
class AnchorMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes, pages, anchors } = this.props;
    console.log(classes, "==>CLASSES");
    return (
      <div>
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={e => {
              this.handleClose();
              pages.moveTo(anchors[0], 0);
            }}
            className={classes.menu}
            style={{ background: "#282828", padding: "10px" }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={e => {
              this.handleClose();
              pages.moveTo(anchors[1], 0);
            }}
            className={classes.menu}
            style={{ background: "#282828", padding: "10px" }}
          >
            Challenge
          </MenuItem>
          <MenuItem
            onClick={e => {
              this.handleClose();
              pages.moveTo(anchors[2], 0);
            }}
            className={classes.menu}
            style={{ background: "#282828", padding: "10px" }}
          >
            Solutions
          </MenuItem>
          <MenuItem
            onClick={e => {
              this.handleClose();
              pages.moveTo(anchors[3], 0);
            }}
            className={classes.menu}
            style={{ background: "#282828", padding: "10px" }}
          >
            Slideshow
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(AnchorMenu);
