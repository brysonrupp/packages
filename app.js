console.log('app js loaded')

const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]

function drawPackages() {
    let packageEle = document.getElementById(`packages`)
    let template = ``
    packages.forEach(package => {
        template += `<div class="col-3 border border-light">
        <h4>To:${package.to}</h4>
        <h4>Priority:${package.priorityLevel}</h4>
        <h4>Fragile:${package.isFragile}</h4>
        <h4>Weight:${package.weight}</h4>
        <h4>Track:${package.trackingNumber}</h4>
        </div>` })
    packageEle.innerHTML = template
}


function filterPriority() {
    template = ''
    let priorities = packages.filter(package => package.priorityLevel == 'express')
    priorities.filter(package => template += `
    <div class="col-12">To: ${package.to} Priority:${package.priorityLevel}</div>
    `)
    document.getElementById('packages').innerHTML = template
}

function filterWeight() {
    template = ''
    let weights = packages.filter(package => package.weight >= 5)
    weights.filter(package => template += `
    <div class="col-12">To: ${package.to} weight:${package.weight}</div>
    `)
    document.getElementById('packages').innerHTML = template
}

function drawAllPackages(packages) {
    drawPackages(packages)
}


