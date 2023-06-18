import { r as registerInstance, h } from './index-8c3bf960.js';

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:rgb(216, 216, 232);box-shadow:0 2 8 #121216;transition:left 0.3s ease-out;z-index:100}:host([open]) aside{left:0}header{padding:1rem;background:black}header h1{font-size:1.5rem;color:white;margin:0}header button{position:absolute;top:0;right:0;padding:1rem;color:white;background:transparent;font-size:1.5rem;border:none}header button:focus{outline:none}#tabs{display:flex;justify-content:center;width:100%;margin:1rem 0px}#tabs button{width:30%;background:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15em 0}#tabs button.active,#tabs button:active,#tabs button:hover{background:black;color:white}#tabs button:focus{border:none}#contact-info{padding:1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:10;opacity:0;pointer-events:none;transition:opacity 0.3 ease-out}:host([open]) .backdrop{opacity:1;pointer-events:all}";

const SideDrawer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.showContactInfo = false;
    this.first = undefined;
    this.open = undefined;
  }
  async oncloseDrawer() {
    this.open = false;
  }
  async onContentChange(content) {
    this.showContactInfo = content === "contact";
  }
  async openMainMenu() {
    this.open = true;
  }
  render() {
    let mainContent = h("slot", null);
    if (this.showContactInfo) {
      mainContent = (h("div", { id: "contact-info" }, h("h2", null, "Contact Information"), h("p", null, "You can reach us via email or phone."), h("ul", null, h("li", null, "Phone: 0333333"), h("li", null, "E-Mail:", h("a", { href: "mailto:contact@contact.com" }, "contact@contact.com")))));
    }
    return [
      h("div", { class: "backdrop", onClick: this.oncloseDrawer.bind(this) }),
      h("aside", null, h("header", null, h("h1", null, this.first), h("button", { onClick: this.oncloseDrawer.bind(this) }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContactInfo ? "active" : "", onClick: this.onContentChange.bind(this, "nav") }, "Navigation"), h("button", { class: this.showContactInfo ? "active" : "", onClick: this.onContentChange.bind(this, "contact") }, "Contact")), h("main", null, mainContent)),
    ];
  }
};
SideDrawer.style = sideDrawerCss;

export { SideDrawer as uc_side_drawer };

//# sourceMappingURL=uc-side-drawer.entry.js.map