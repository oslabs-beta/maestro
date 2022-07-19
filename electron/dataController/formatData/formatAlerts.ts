// formats alerts data for processing in the frontend
export const formatAlerts = (data: any) => {
  const groups = data.data.groups;
  const tableData = [];
  for (let group of groups) {
    for (let rule of group.rules) {
      if (rule.state) {
        const ruleObj = {
          group: group.name,
          state: rule.state,
          name: rule.name,
          severity: rule.labels?.severity,
          description: rule?.annotations.description,
          summary: rule?.annotations.summary,
          alerts: rule.alerts,
        };
        tableData.push(ruleObj);
      }
    }
  }
  return tableData;
};