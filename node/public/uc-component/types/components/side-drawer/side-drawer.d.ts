export declare class SideDrawer {
  showContactInfo: boolean;
  first: string;
  open: boolean;
  oncloseDrawer(): Promise<void>;
  onContentChange(content: string): Promise<void>;
  openMainMenu(): Promise<void>;
  render(): any[];
}
