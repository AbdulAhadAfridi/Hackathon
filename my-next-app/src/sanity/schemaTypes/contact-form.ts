export default {
    name: "contactForm",
    type: "document",
    title: "Contact Form",
    fields: [
      {
        name: "yourName",
        type: "string",
        title: "Your Name",
        validation: (Rule: any ) =>
          Rule.required()
            .min(1)
            .max(50)
            .warning("Name should be between 1 and 50 characters."),
      },
      {
        name: "email",
        type: "string",
        title: "Email Address",
        validation: (Rule :any) =>
          Rule.required()
            .email()
            .error("A valid email address is required."),
      },
      {
        name: "subject",
        type: "string",
        title: "Subject",
        validation: (Rule:any) =>
          Rule.required()
            .min(1)
            .max(100)
            .warning("Subject should be between 1 and 100 characters."),
      },
      {
        name: "message",
        type: "text",
        title: "Message",
        validation: (Rule:any) =>
          Rule.optional()
            .min(1)
            .max(500)
            .warning("Message should be between 1 and 500 characters."),
      },
    ],
  };
  