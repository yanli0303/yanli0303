export const placeholder = (template: string, data: Record<string, any>) =>
  template.replace(/\{\{[^}]+\}\}/g, (match) => {
    // Remove the wrapping curly braces
    const prop = match.slice(2, -2);
    return data[prop] || "";
  });
