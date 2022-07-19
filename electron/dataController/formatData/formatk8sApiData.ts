/**
 * 
 * @param data 
 * @param unitType 
 * @returns array with objets for (nodes, namespaces, deployments, services, pods)
 */

export function formatk8sApiData(data: any) {
  const output: any = data.items.reduce((result: any, obj: any) => {
    const resObj: any = {
      name: obj.metadata.name
    }
    if (obj.metadata.namespace) resObj.namespace = obj.metadata.namespace
    if (data.kind === "NodeList") resObj.conditions = obj.status.conditions;
    if (data.kind === "PodList") resObj.status = obj.status.phase;
    result.push(resObj)
    return result;
  }, [])
  return output;
}

