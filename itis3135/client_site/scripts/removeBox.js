// save original styling
document.addEventListener('DOMContentLoaded', () => {
    const originalRules = [];
    Array.from(document.styleSheets).forEach((sheet) => {
      let rules;
      try {
        rules = sheet.cssRules;
      } catch (e) {
        return; 
      }
      Array.from(rules).forEach((rule) => {
        if (rule.type === CSSRule.STYLE_RULE) {
          const style = rule.style;
          const val = style.getPropertyValue('display');
          if (val) {
            originalRules.push({
              rule,
              value: val,
              priority: style.getPropertyPriority('display')
            });
          }
        }
      });
    });

    // remove grid styling
    document.getElementById('removeBox')
            .addEventListener('click', () => {
      originalRules.forEach(({rule, priority}) => {
        rule.style.setProperty('display', 'contents', priority);
      });
    });

    // reset page
    document.getElementById('resetBox')
            .addEventListener('click', () => {
      originalRules.forEach(({rule, value, priority}) => {
        rule.style.setProperty('display', value, priority);
      });
    });
});