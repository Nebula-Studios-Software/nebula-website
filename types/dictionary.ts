export interface Dictionary {
  common: {
    nav: {
      home: string;
      services: string;
      projects: string;
      about: string;
      contact: string;
      getInTouch: string;
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        terms: string;
        privacy: string;
        send: string;
        success: {
          title: string;
          message: string;
        };
      };
      info: {
        email: string;
      };
    };
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    buttons: {
      work: string;
      contact: string;
    };
    services: {
      development: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      strategy: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      web: {
        title: string;
        description: string;
      };
      mobile: {
        title: string;
        description: string;
      };
      design: {
        title: string;
        description: string;
      };
      strategy: {
        title: string;
        description: string;
      };
      ecommerce: {
        title: string;
        description: string;
      };
      branding: {
        title: string;
        description: string;
      };
    };
  };
}
